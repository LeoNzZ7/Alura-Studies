export const timeforseconds = (time: string) => {
    const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

    const hoursInMinutes = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hoursInMinutes + minutesInSeconds + Number(seconds);
};  
//Função que converte o tempo em string para segundos em números