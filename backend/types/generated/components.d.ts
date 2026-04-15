import type { Schema, Struct } from '@strapi/strapi';

export interface FundingMsmeIncubatorSchemeTable
  extends Struct.ComponentSchema {
  collectionName: 'components_funding_msme_incubator_scheme_tables';
  info: {
    displayName: 'MSME Incubator Scheme table';
  };
  attributes: {
    incubatee_name: Schema.Attribute.String;
    project: Schema.Attribute.String;
    s_no: Schema.Attribute.String;
  };
}

export interface FundingSeedFundTable extends Struct.ComponentSchema {
  collectionName: 'components_funding_seed_fund_tables';
  info: {
    displayName: 'Seed Fund Table';
  };
  attributes: {
    fund_source: Schema.Attribute.String;
    incubatee_name: Schema.Attribute.String;
    project: Schema.Attribute.String;
    s_no: Schema.Attribute.String;
  };
}

export interface IncubateeProfileIncubateeEntry extends Struct.ComponentSchema {
  collectionName: 'components_incubatee_profile_incubatee_entries';
  info: {
    displayName: 'Incubatee Entry';
  };
  attributes: {
    area_of_operations: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    website: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'funding.msme-incubator-scheme-table': FundingMsmeIncubatorSchemeTable;
      'funding.seed-fund-table': FundingSeedFundTable;
      'incubatee-profile.incubatee-entry': IncubateeProfileIncubateeEntry;
    }
  }
}
