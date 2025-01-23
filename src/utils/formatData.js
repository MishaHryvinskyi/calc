import { format } from "date-fns";
import { uk } from "date-fns/locale";

const formatDate = start => {
    return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', {
        locale: uk,
    });
}

export { formatDate }