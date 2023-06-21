import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactType } from '../type/type'

export const contactsApi = createApi({
  tagTypes: ['Contact'],
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006/',
  }),
  endpoints: (builder) => ({
    getContact: builder.query<ContactType[], void>({
      query: () => `contacts`,
      providesTags: ['Contact'],
    }),

    getContactById: builder.query<ContactType, string>({
      query: (id) => `contacts/${id}`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation<void, ContactType>({
      query: (contact) => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation<void, ContactType>({
      query: ({ id, ...rest }) => ({
        url: `contacts/${id}`,
        method: 'PUT',
        body: { ...rest },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useGetContactQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi
