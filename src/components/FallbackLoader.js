import React, {useEffect} from 'react';
import * as Swal from '../utils/Helpars/SwalHelper'

function FallbackLoader() {
	useEffect(() => {
		Swal.loading();
	}, []);

	useEffect(() => {
		return () => {
			Swal.close()
		}
	}, [])
	return <div/>
}

export default FallbackLoader
