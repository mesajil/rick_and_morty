import { About, FormClass } from '../'


export default function FormView({login}) {

    return (
        <div>
            {/* Render About component */}
            <About></About>
            {/* Render Form component */}
            <FormClass login={login}></FormClass>
        </div>
    )
}