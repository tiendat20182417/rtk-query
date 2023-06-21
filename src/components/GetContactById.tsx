import React from 'react'
import { useGetContactByIdQuery } from '../services/contactsApi'

const GetContactById = ({ id }: { id: string }) => {
  const { data } = useGetContactByIdQuery(id)
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>
}

export default GetContactById
