export default function Display(props) {
  return (
    <div>
      Display Component<div>{console.log("display", props)}</div>
      {props.localWeather.location.country}
      {props.localWeather.location.name}
      {props.localWeather.current.condition.text}
      {props.localWeather.location.country}
      
    </div>
  );
}
