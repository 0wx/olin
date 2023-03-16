import { FC, useRef } from 'react'
import { IoCloudUpload, IoDocument } from 'react-icons/io5'
import { useRegister } from '../../hooks/useRegister'

export const InputSarana: FC = () => {
  const { nextStep } = useRegister()
  const fileRef = useRef<HTMLInputElement>(null)
  const onClickUpload = () => {
    fileRef.current?.click()
  }
  return (
    <div className='w-[30rem] bg-white shadow rounded-lg p-5 max-h-[90vh] overflow-auto flex flex-col gap-4'>
      <div className='text-xl font-bold mb-4'>Input Data Perusahaan</div>

      <select className='select select-bordered w-full px-4 rounded-lg border border-gray-300'>
        <option value=''>Pilih Bidang Usaha</option>
        <option value=''>Bidang Usaha 1</option>
        <option value=''>Bidang Usaha 2</option>
        <option value=''>Bidang Usaha 3</option>
      </select>
      <input
        type='text'
        placeholder='Nama Perusahaan *'
        className='input input-bordered py-4'
      />
      <input
        type='text'
        placeholder='NPWP Perusahaan *'
        className='input input-bordered py-4'
      />
      <input
        type='text'
        placeholder='Alamat Sesuai NPWP *'
        className='input input-bordered py-4'
      />
      <select className='select select-bordered w-full px-4 rounded-lg border border-gray-300'>
        <option value=''>Pilih Provinsi</option>
        <option value=''>Provinsi 1</option>
        <option value=''>Provinsi 2</option>
        <option value=''>Provinsi 3</option>
      </select>
      <select className='select select-bordered w-full px-4 rounded-lg border border-gray-300'>
        <option value=''>Pilih Kabupaten/Kota</option>
        <option value=''>Kabupaten/Kota 1</option>
        <option value=''>Kabupaten/Kota 2</option>
        <option value=''>Kabupaten/Kota 3</option>
      </select>
      <select className='select select-bordered w-full px-4 rounded-lg border border-gray-300'>
        <option value=''>Pilih Kecamatan</option>
        <option value=''>Kecamatan 1</option>
        <option value=''>Kecamatan 2</option>
        <option value=''>Kecamatan 3</option>
      </select>
      <input
        type='text'
        placeholder='Kode Pos *'
        className='input input-bordered py-4'
      />
      <div className='text-lg font-bold mb-4'>Upload Kelengkapan Data</div>
      <input ref={fileRef} type='file' className='hidden' />
      <div onClick={onClickUpload} className='cursor-pointer'>
        <div className='rounded-t-lg bg-primary text-base-100 font-bold p-3 flex items-center gap-2'>
          <IoDocument />
          NIB *
        </div>
        <div className='border rounded-b-lg py-5 flex flex-col justify-center items-center gap-2 font-bold text-sm'>
          <IoCloudUpload size={30} />
          Unggah NIB Valid
        </div>
      </div>
      <button className='btn btn-secondary text-white font-bold mt-12' onClick={nextStep}>Selanjutnya</button>
    </div>
  )
}
