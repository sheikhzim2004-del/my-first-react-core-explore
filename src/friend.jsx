export default function Friend({friend}){
  return(
    <div>
    <h4>Name: {friend.name}</h4>
    <p>Age: {friend.age}</p>
    <p>Passion: {friend.passion}</p>
  </div>
  )
}