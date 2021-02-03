import { API } from '../../services/api';
const extensions =  {
    sudo: {
        exec: async ({ structure, history, cwd },command) => {
            let data = await API(command.input);
            console.log(data);
            
            return { structure, cwd,
                history: history.concat({ value: 'Nice try...' }),
            };
        },
    },
    docker: {
        exec: async ({ structure, history, cwd },command) => {
            let data = await API(command.input);
            console.log(data);
            // можно будет отрендерить дату
            return { structure, cwd,
                history: history.concat({ value: 'Nice try...' }),
            };
        },
    },

    } 

    export default extensions