export const getDiffTimeBetweenCurrentDate = (dateString: string, now = new Date()) => {
  const dayInMilliseconds = 86400000;

  if (!dateString) {
    return dateString;
  }

  const date = new Date(dateString);
  const isInvalidDate = isNaN(date.getTime());

  if (isInvalidDate) {
    return dateString;
  }

  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const buildMessage = (label: string, value: number) => {
    if (value !== 1) {
      return `${value} ${label}s atrás`;
    }

    return `${value} ${label} atrás`;
  };

  const notZero = (value: number) => value !== 0;

  if (month !== now.getMonth()) {
    const diff = Math.abs(now - date);
    const days = Math.ceil(diff / dayInMilliseconds);

    return buildMessage("dia", days);
  }

  if (day < now.getDate() && notZero(day)) {
    return buildMessage("dia", now.getDate() - day);
  }

  if (hour < now.getHours() && notZero(hour)) {
    return buildMessage("hora", now.getHours() - hour);
  }

  if (minutes < now.getMinutes() && notZero(minutes)) {
    return buildMessage("minuto", now.getMinutes() - minutes);
  }

  if (seconds < now.getSeconds() && notZero(seconds)) {
    return buildMessage("segundo", now.getSeconds() - seconds);
  }

  return buildMessage("segundo", 1);
}
