import { InjectionToken, Provider } from "@angular/core";
import { TicketApiService } from "./ticket-api.service";
export const HTTP_TICKET_SERVICE = new InjectionToken('TicketApiService');

export const TICKET_API_PROVIDER: Provider = {
    provide: HTTP_TICKET_SERVICE,
    useClass: TicketApiService,
};