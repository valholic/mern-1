import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components/atoms'
import './register.scss'

export default function Register() {
    return (
        <div className='main-page'>
            <div className='left'>
                <p className='title'>Register</p>
                <Gap height={'20px'} />
                <Input label={'Full Name'} placeHolder={'Enter full name'} />
                <Input label={'E-mail'} placeHolder={'Enter E-mail'} />
                <Input label={'Password'} placeHolder={'Enter password'} type={"password"} />
                <Gap height={'20px'} />
                <Button title={'Register'} />
                <Gap height={'40px'} />
                <Link title={'Kembali ke login'}  />
            </div>
            <div className='right'>
                <img src={RegisterBg} className='bg-image' />
            </div>
        </div>
    )
}