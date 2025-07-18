export function formatTimeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);

    let interval = seconds / 31536000; // Anos
    if (interval > 1) {
        const years = Math.floor(interval);
        return `${years} ano${years > 1 ? 's' : ''} atrás`;
    }
    interval = seconds / 2592000; // Meses
    if (interval > 1) {
        const months = Math.floor(interval);
        return `${months} ${months > 1 ? 'meses' : 'mês'} atrás`;
    }
    interval = seconds / 86400; // Dias
    if (interval > 1) {
        const days = Math.floor(interval);
        return `${days} dia${days > 1 ? 's' : ''} atrás`;
    }
    interval = seconds / 3600; // Horas
    if (interval > 1) {
        const hours = Math.floor(interval);
        return `${hours}h atrás`;
    }
    interval = seconds / 60; // Minutos
    if (interval > 1) {
        const minutes = Math.floor(interval);
        return `${minutes}min atrás`;
    }
    return 'agora mesmo';
}