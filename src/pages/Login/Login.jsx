import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components/atoms'
import './login.scss'

export default function Login() {
    return (
        <div className='main-page-2'>
            <div className='left-2'>
                <img src={LoginBg} className='bg-image-2' />
            </div>
            <div className='right-2'>
                <p className='title-2'>Login</p>
                <Gap height={'20px'} />
                <Input label={'E-mail'} placeHolder={'Enter E-mail'} />
                <Input label={'Password'} placeHolder={'Enter password'} type={"password"} />
                <Gap height={'20px'} />
                <Button title={'Login'} />
                <Gap height={'40px'} />
                <Link title={'Belum punya akun? Daftar di sini!'}  />
            </div>
        </div>
    )
}