import { useState, useEffect } from 'react';
import { loadScript, loadStyle } from '../utils/scripts';

function useMicroApp(app) {

    const [state, setState] = useState({
        loaded: false,
        error: false,
        component: null
    });

    useEffect(() => {

        fetch(app.embedUrl).then(response => response.json()).then(data => {
            console.log('micro data', data, app.embedUrl);
            loadScript(`${app.hostUrl}/${data.js}`, app.global).then((amdModule) => {
                console.log('module', amdModule);
                setState({...state, loaded: true,  component: amdModule.Component });
            }).catch(scriptErr => {
                console.log('script error', scriptErr);
                setState({...state, loaded: false, error: scriptErr });
            });

            if (data.css) {
                loadStyle(`${app.hostUrl}/${data.css}`);
            }
        }).catch((err) => {
            setState({...state, error: err, loaded: false})
        })
    },[app.embedUrl]);
    

    return [state.loaded, state.error, state.component];
}

export default useMicroApp;

