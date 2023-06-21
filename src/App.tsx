import React from 'react'

import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} from './services/contactsApi'
import GetContactById from './components/GetContactById'
import { ContactType } from './type/type'

const App = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetContactQuery()

  const [addContact] = useAddContactMutation()
  const contact = {
    id: '1',
    name: 'datadd',
    email: 'dat@gmail.com',
  }
  const addHandle = async () => {
    await addContact(contact)
  }

  const [updateContact] = useUpdateContactMutation()
  const contactUpdate = {
    id: '1',
    name: 'datupdate',
    email: 'dat@gmail.com',
  }
  const updateHandle = async () => {
    await updateContact(contactUpdate)
  }

  const [deleteContact] = useDeleteContactMutation()

  const deleteHandle = () => {
    deleteContact('1')
  }

  return (
    <div className="flex flex-col justify-center items-center  bg-red-400">
      <h1 className="text-5xl font-bold mb-10">RTK Query</h1>
      <div>
        <button className="bg-yellow-400 border-2 border-black p-2 rounded-lg my-4" onClick={addHandle}>
          Add
        </button>
        <button className="bg-yellow-400 border-2 border-black p-2 rounded-lg my-4" onClick={updateHandle}>
          Update
        </button>
        <button className="bg-yellow-400 border-2 border-black p-2 rounded-lg my-4" onClick={deleteHandle}>
          Delete
        </button>
      </div>

      {isLoading && <h2>...loading</h2>}
      {isFetching && <h2>...fetching</h2>}
      {isError && <h2>...error</h2>}
      {isSuccess && (
        <>
          {data.map((item: ContactType) => (
            <>
              <div className="mt-8 text-xl font-bold" key={item.id}>
                {item.name}
              </div>
              <GetContactById id={item.id} />
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default App
