import React from 'react'
import UserFormSection from "../../components/UserFormSection";
import { useSelector} from "react-redux";
import CockTailList from "./CockTailList";
import Language from "../../components/Language";

const Index = () => {
	const state = useSelector(state => state.State)

	return (<>
			<Language/>
			{state.showResults ? <CockTailList/> : <UserFormSection/>}
		</>)
}

export default Index
