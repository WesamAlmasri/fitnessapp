import moment from 'moment';


export const formatDuration = (duration) => {
    return moment.utc(moment.duration(duration, 's').asMilliseconds()).format('mm:ss');
}