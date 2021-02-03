import Terminal from 'react-bash';
import extensions from './extensions'


const CTerminal = ()=>{
    return <Terminal styles={{ReactBash:{minHeight: 'calc(100vh - 60px)'}}}  extensions={extensions} prefix="[]" theme="light"  />
}

export default CTerminal