function Noti(props) {
	return <div className="px-8 py-4 bg-red-300 w-fit">Noti {props.msg === undefined ? '' : props.msg}</div>;
}

export default Noti;