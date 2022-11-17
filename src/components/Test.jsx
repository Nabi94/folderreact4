import '../styles/tailwind.css'

const Test = ({children,active,set}) =>{


    return(


        <>
        {children.map((tab,index)=> <button className={active === index ? 'bg-green-900' : 'bg-yellow-400'} onClick={() => set(index)}   key={index}>{tab.props.title}</button>)}

        <div className='m-5'>{children[active]}</div>
        </>
    )
}
export default Test