import moment from 'moment';


export const formatDuration = (duration) => {
    return moment.utc(moment.duration(duration, 's').asMilliseconds()).format('mm:ss');
}

export const formatPace = (pace_in_second_per_meter) => {
    const pace_in_minute_per_km = pace_in_second_per_meter * (1000 / 60);
    return moment.utc(moment.duration(pace_in_minute_per_km, 'minutes').asMilliseconds()).format('mm:ss');
}