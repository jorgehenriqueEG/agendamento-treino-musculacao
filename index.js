const exercicios = ['Dumbbell Curl', 'Leg Press', 'Bench Press', 'Squat', 'Row', 'Push-up', 'Deadlift', 'Shoulder Press'];

function montarTrenos(dias) {
  let usados = [];
  let listaTrenos = [];
  for (let i = 0; i < dias; i++) {
    let treinoDia = [];
    for (let j = 0; j < 3; j++) {
      let ex = exercicios[j];
      if (!usados.includes(ex)) {
        treinoDia.push(ex);
        usados.push(ex);
      }
    }
    listaTrenos.push(treinoDia.join(', '));
  }
  return listaTrenos;
}

console.log(montarTrenos(3));