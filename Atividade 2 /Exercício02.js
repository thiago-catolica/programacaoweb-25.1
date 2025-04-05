let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let matriz_t=[
    [matriz[0][0], matriz[1][0], matriz[2][0]],
    [matriz[0][1], matriz[1][1], matriz[2][1]]
];

console.log("Matriz normal: " );

for (let i=0; i<3; i++){
    for (let j=0; j<2; j++){
        process.stdout.write(matriz[i][j] + " ");
    }
  console.log();
}

console.log("\nMatriz transposta: ");

for (let i=0; i<2; i++){
    for (let j=0; j<3; j++){
        process.stdout.write(matriz_t[i][j] + " ");
    }
    console.log();
}
