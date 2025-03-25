import './index.css'

const Title = ({
  title,
  titleClassname,
  variation,
  color
}: any) => {

  if (variation === 2) {
    return <div className={`relative c-title-2 flex justify-center items-center mb-4`}>
      <div className={`${titleClassname} c-text-2 text-4xl font-onest font-bold w-fit`}
        style={{
          // backgroundColor: color
        }}
      >{title}</div>
    </div>
  }

  return <div className='relative c-title flex justify-center items-center mb-4'>
    <div className={`${titleClassname} c-text text-4xl font-onest font-bold w-fit`}>{title}</div>
  </div>
}
 
export default Title;