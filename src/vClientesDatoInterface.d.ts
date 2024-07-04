export interface VClientesDatoInterface {
  Bloqueado: boolean;
  Ciudad: string;
  Cliente: string;
  Cliente_Contado: boolean;
  CodPostal: string;
  Direccion: string;
  ECommerce_Activo: boolean;
  ECommerce_PersonaApellidos: string | null;
  ECommerce_PersonaNombre: string | null;
  E_Mail: string;
  EsUbicacion: boolean;
  Extension: string;
  FechaAlta: string;
  FechaInsertUpdate: string;
  IdCalendario: number | null;
  IdCliente: string;
  IdCompañia: number;
  IdContacto: number;
  IdContactoA: number;
  IdContactoCliente: number | null;
  IdContactoF: number;
  IdContactoG: number;
  IdDelegacion: number;
  IdDelegacionCli: number;
  IdDoc: number;
  IdEmpleadoBloqueo: number | null;
  IdMotivoBloqueo: number | null;
  IdPais: number | null;
  IdPoblacion: number | null;
  IdProvincia: number | null;
  IdRelacion: number | null;
  IdTipo: number;
  IdTipoOtro: number;
  InsertUpdate: boolean;
  Kmts: number;
  MiCod: string | null;
  Nif: string;
  Nif2: string | null;
  Nivel: number;
  Notas: string | null;
  NumFax: string;
  NumTelefono: string;
  Observaciones: string;
  Padre: string | null;
  Pais: string;
  Provincia: string;
  RappelsPorPlanta: boolean;
  RazonSocial: string;
  TipoTransporte: number;
  Usuario: string;
  Web: string;
}