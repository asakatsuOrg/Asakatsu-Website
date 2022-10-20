import './contributor.style.scss'

const Contributor = () => {
    return (
        <div className="contributor">
            <h1>Contributors</h1>
            <a href = "https://github.com/asakatsuOrg/AsaKatsuProject/graphs/contributors">
                <img src = "https://contrib.rocks/image?repo=asakatsuOrg/AsaKatsuProject"/>
            </a>
        </div>
    )
}

export default Contributor