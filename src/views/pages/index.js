import React, {useEffect} from 'react'
import UserFormSection from "../../components/UserFormSection";
import {useDispatch, useSelector} from "react-redux";
import {retrieveAllTheOptions} from "../../redux/Options.reducer";
import CockTailList from "./CockTailList";
import Language from "../../components/Language";

const Index = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.State)

	useEffect(() => {
		dispatch(retrieveAllTheOptions())
	}, [])

	return (<>
			<Language/>
			{state.showResults ? <CockTailList/> : <UserFormSection/>}
		</>)


}

export default Index
