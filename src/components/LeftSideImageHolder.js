import React from "react";
import bg_1 from "../assets/images/bg-0.jpeg";
import bg_2 from "../assets/images/bg-1.jpeg";
import bg_3 from "../assets/images/bg-2.jpeg";
import bg_4 from "../assets/images/bg-3.jpeg";
import {useSelector} from "react-redux";

const LeftSideImageHolder = () => {
	// const dispatch = useDispatch();
	const state = useSelector(state => state.State)

	const images = [bg_1, bg_2, bg_3, bg_4]

	return (<img className="animate__animated animate__fadeIn" src={images[state.currentFormStep]} style={{
			width: '100%', height: '100vh', objectFit: 'cover', transition: '1s'
		}} alt=""/>);
}

export default LeftSideImageHolder
