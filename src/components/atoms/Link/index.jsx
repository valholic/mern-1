import './link.scss'

export default function Link({onClick, title}) {
    return (
        <p className='link' onClick={onClick}>{title}</p>
    )
}
