/*
LINK: https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript

Story
There are two animals, a hare and a tortoise. They want to run a race. The hare's speed is 100 meters per minute. The tortoise's speed is 10 meters per minute. They want to race to see who first ran to the top of the mountain, the distance is 1000 meters. The hare runs very fast. When he ran to 500 meters, the tortoise was far behind. The hare decided to have a sleep. Zzz...

When he opened his eyes, he was surprised to find that the tortoise was near the finish. Only the last 40 meters. The hare hurried to catch the turtle.

Question: Who is the winner? The tortoise or the hare? How many minutes does the hare sleep?

Task
Complete function race() that accepts 5 arguments:

speed1 The speed of hare.
speed2 The speed of tortoise.
distance Race distance.
sleep The distance from starting point to the location of the hare to sleep.
getup When the hare woke up, the distance between the tortoise and the ending point.
The result should be a string. like these:

"The hare won the race. He is sleeping for XX minutes."
or
"The tortoise won the race. The hare is sleeping for XX minutes."
or
"The hare and the tortoise tied. The hare is sleeping for XX minutes."
XX is a number of minutes(round to integer).
*/
function race(speed1,speed2,distance,sleep,getup){
 
    //const timeHare = distance / speed1 //Tiempo para terminar toda la carrera la liebrea
    //const timeTortoise = distance / speed2 //Tiempo para terminar toda la carrera la tortuga
    const distTerm = distance-sleep // distancia que le falta a la liebre x recorrer
    const tiempoRestTortu =getup/speed2 //tiempo que la falta a la tortuga
    const tiempoRestLiebre = distTerm/speed1 //tiempo que la falta a la liebre
    const tiempoSueñoLiebre = [(distance-getup)/speed2] - sleep/speed1
    if(tiempoRestLiebre > tiempoRestTortu ){
      return `The tortoise won the race. The hare is sleeping for ${
  tiempoSueñoLiebre.toFixed(0)} minutes.`
    } else if(tiempoRestTortu > tiempoRestLiebre ){
       return `The hare won the race. He is sleeping for ${
  tiempoSueñoLiebre.toFixed(0)} minutes.`
    }else if(tiempoRestTortu == tiempoRestLiebre ){
      return `The hare and the tortoise tied. The hare is sleeping for ${
  tiempoSueñoLiebre.toFixed(0)} minutes.`
    }
   
    }