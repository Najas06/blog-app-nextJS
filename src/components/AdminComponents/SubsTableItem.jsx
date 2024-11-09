import React from 'react'

const SubsTableItem = ({email,mongoId,date,deleteEmail}) => {
    const emailDate = new Date(date)
  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"N/A"}
        </th>
        <td className='px-6 py-4 max-sm:hidden'>{date?emailDate.toDateString():"N/A"}</td>
        <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>X</td>
    </tr>
  )
}

export default SubsTableItem