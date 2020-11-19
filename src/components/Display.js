export default function Display(props) {
  return (
    <div>
      <div>{console.log("display", props)}</div>
      <div>{props.localWeather.location.country}</div>
      <div>{props.localWeather.location.name}</div>
      <div>{props.localWeather.current.condition.text}</div>
      
    </div>
  );
}
