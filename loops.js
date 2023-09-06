
 let array1=[1,2,"Billa","sneha",45];
 let array2=[5,5,"React"];
 for(i=0;i<3;i++){
    if(array1.length>array2.length){
        let concatedArray=array1.concat(array2);
        console.log(concatedArray);
    }
    else{
        console.log(array1);
    }
 }

let scores = [12, 55, 70, 47];

let total = 0;
scores.forEach((score) => {
  total += score;
});

console.log(total);

let studentsScores = [70, 12, 55, ,70, 47];

studentsScores.forEach((stundentScore) => {
  console.log(stundentScore);
});

let marks=[10,35,20,45,50];
if(marks>25){
        console.log("marks greaterthan 25",score);
    }
    else{
        console.log("marks are less than 25");
    }

