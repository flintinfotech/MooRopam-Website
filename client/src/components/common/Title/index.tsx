import './index.css'

const Title = ({
  title,
  titleClassname
}: any) => {
  return <div className='c-title flex justify-center items-center mb-4'>
    <div className={`${titleClassname} c-text text-4xl font-onest font-bold w-fit`}>{title}</div>
  </div>
}
 
export default Title;