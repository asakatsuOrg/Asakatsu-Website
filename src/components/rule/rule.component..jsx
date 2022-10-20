import './rule.style.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Rule = () => {
    return (
        <div className='rule' data-aos="fade-up">
            <h1>Rule</h1>
            <ul>
                <li>Be concise and specific with your goals. Eg: Set Goal (Avie):[100 spaces in 100 days]</li>
                <li>Make sure to create a PR for the issue you created.</li>
                <li>Read the <a href="https://github.com/asakatsuOrg/AsaKatsuProject/blob/develop/CODE_OF_CONDUCT.md">Code Of Conduct</a> to ensure a smoother experience for everyone contributing</li>
            </ul>
        </div>
    )
}

export default Rule