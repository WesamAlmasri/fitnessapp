import * as turf from '@turf/turf';
import * as _ from 'lodash';


export const distanceBetween = (origin, destination) => {
    var from = turf.point([origin.coords.longitude, origin.coords.latitude]);
    var to = turf.point([destination.coords.longitude, destination.coords.latitude]);
    var options = {units: 'meters'};

    return _.round(turf.distance(from, to, options));
}


export const computePace = (delta, prevPosition, position) => {
    const time = (position.timestamp - prevPosition.timestamp) / 1000;
    const pace = time /delta;
    return pace;
}