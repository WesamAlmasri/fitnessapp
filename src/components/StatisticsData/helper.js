import {floor} from 'lodash';
import { formatDuration, formatPace, toTimeDeltaString } from '../../generalHelper';


export const avgPace = (distance_m, time_ms) => {
    let result = time_ms  /(distance_m * 1000) || 0;
    return result;
}


export const dataPerKm = (data) => {
    let response = [];
    let periods = [];
    let index = 0;
    let km = 0;
    for (; index < data.distances.length; index++){
        if(km === 0){
            periods.push({index: index, km: km})
            km += 1;
        }else{
            if(floor(data.distances[index] / (1000 *km)) === 1){
                periods.push({index: index, km: km})
                km += 1;
            }
        }
        
    }
    if(periods[periods.length - 1].km !== data.distances[data.distances.length -1]){
        periods.push({index: index - 1, km: data.distances[data.distances.length -1]/1000})
    }
    let i = 1;
    for (; i < periods.length; i++){
        response.push(
            {
                id: i,
                delta: `${periods[i-1].km} - ${periods[i].km}`,
                period: toTimeDeltaString(data.positions[periods[i-1].index].timestamp, data.positions[periods[i].index].timestamp),
                time: formatDuration((data.positions[periods[i].index].timestamp - data.positions[periods[i-1].index].timestamp)/1000),
                avgPace: formatPace(avgPace(data.distances[periods[i].index], data.positions[periods[i].index].timestamp - data.positions[periods[i-1].index].timestamp)),
                timePercent: (data.positions[periods[i].index].timestamp - data.positions[periods[i-1].index].timestamp)/(data.positions[data.positions.length - 1].timestamp - data.positions[0].timestamp),
                pacePercent: avgPace(data.distances[periods[i].index], data.positions[periods[i].index].timestamp - data.positions[periods[i-1].index].timestamp)/avgPace(data.distances[data.distances.length - 1], data.positions[data.positions.length - 1].timestamp - data.positions[0].timestamp)
            }
        );
    }
    return response;
}  