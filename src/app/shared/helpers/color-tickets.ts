
export function getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
    case 'open':
        return 'bg-[#FFFFF0] text-yellow-800';
    case 'resolved':
        return 'bg-[#DDFFDD] text-green-800';
    case 'closed':
        return 'bg-blue-100 text-blue-800';
    case 'archived':
        return 'bg-purple-100 text-purple-800';
    case 'deleted':
        return 'bg-[#FEE7E7] text-red-800';
    default:
        return 'bg-gray-100 text-gray-800';
    }
}

export function getPriorityClass(status: string): string {
    switch (status.toLowerCase()) {
        case 'low':
        return 'bg-[#DDFFDD] text-green-800';
        case 'normal':
        return 'bg-[#FFFFF0] text-yellow-800';
        case 'high':
        return 'bg-[#FEE7E7] text-red-800';
        case 'emergency':
        return 'bg-[#FEE7E7] text-red-800';
        default:
        return 'bg-gray-200 text-gray-800';
    }
}
