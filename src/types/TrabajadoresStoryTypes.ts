export type TrabajadoresStoryTypes = {
    story: Story;
    cv:    number;
    rels:  any[];
    links: any[];
}

export type Story = {
    name:               string;
    created_at:         Date;
    published_at:       null;
    id:                 number;
    uuid:               string;
    content:            Content;
    slug:               string;
    full_slug:          string;
    sort_by_date:       null;
    position:           number;
    tag_list:           any[];
    is_startpage:       boolean;
    parent_id:          null;
    meta_data:          null;
    group_id:           string;
    first_published_at: null;
    release_id:         null;
    lang:               string;
    path:               null;
    alternates:         any[];
    default_full_slug:  null;
    translated_slugs:   null;
}

export type Content = {
    _uid:         string;
    component:    string;
    Trabajadores: Trabajadores[];
    _editable:    string;
}

export type Trabajadores = {
    Img:       Img;
    Rol:       string;
    _uid:      string;
    Nombre:    string;
    component: string;
    _editable: string;
}

export type Img = {
    id:              number;
    alt:             string;
    name:            string;
    focus:           string;
    title:           string;
    source:          string;
    filename:        string;
    copyright:       string;
    fieldtype:       string;
    meta_data:       MetaData;
    is_external_url: boolean;
}

export type MetaData = {
}
