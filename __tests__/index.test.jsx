import { useReducer } from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import UploadFile from '../components/UploadFile'

const mockData = {fileList:[]}


const mockData2 =  {fileList:[{
  id:0, 
  name: "file1.las",
  size:574842,
  type:""},
  {
    id:1, 
    name: "file2.las",
    size:574842,
    type:""}]}

const dispatch= () => {
  console.log("yup")
}

describe('Home', () => {
  it('renders a div that says organizer', () => {
    render(<Home />)
    const title = screen.getByText('The organizer')

    expect(title).toBeInTheDocument()

  })
})

describe('Checking the functionality of the UploadFile component', ()=>{
  
  it('Checks classes that render in the upload file', () => {
    const {container} = render(<UploadFile data={mockData} dispatch={dispatch} />)
    // const dropBody = (container)
    expect(container.firstChild).toHaveClass('dropzone')
    
  })

  it('displays the text within UploadFile', () =>{
    const {container} = render(<UploadFile data={mockData} dispatch={dispatch} />)
    // const dropBody = (container)
    expect(container.getElementsByClassName('uploadImageHolder'))
    expect(screen.getByText((content, element) =>content.startsWith('Upload Image')))
  })

  it('If no added files should display No Data', () =>{
    expect(mockData.fileList.length).toBe(0)
    const {container} = render(<UploadFile data={mockData} dispatch={dispatch} />)
    // const dropBody = (container)
    expect(container.getElementsByClassName('uploadImageHolder'))
    expect(screen.getByText((content, element) =>content.startsWith('No Data')))
  })

  it('Added files are displayed', () =>{
    const {container} = render(<UploadFile data={mockData2} dispatch={dispatch} />)
    // const dropBody = (container)
    expect(mockData2.fileList.length).toBe(2)
    expect(container.getElementsByClassName('fileList'))
    expect(screen.getByText((content, element) =>content.startsWith('file1.las')))
    expect(screen.getByText((content, element) =>content.startsWith('file2.las')))
  })
})

describe('useReducer test', ()=>{
  it('Adds item to list', ()=>{
    const container = render(<Home />)
    // expect(screen.getByText((content, element) =>content.startsWith('UploadImage')))
  })
  it('Removes item from list', ()=>{
    const container = render(<Home />)
    // expect(screen.getByText((content, element) =>content.startsWith('UploadImage')))
  })
})