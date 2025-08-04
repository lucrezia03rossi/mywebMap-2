var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROVINCIA_1 = new ol.format.GeoJSON();
var features_PROVINCIA_1 = format_PROVINCIA_1.readFeatures(json_PROVINCIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIA_1.addFeatures(features_PROVINCIA_1);
var lyr_PROVINCIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIA_1, 
                style: style_PROVINCIA_1,
                popuplayertitle: 'PROVINCIA',
                interactive: true,
                title: '<img src="styles/legend/PROVINCIA_1.png" /> PROVINCIA'
            });
var format_REGIONI_2 = new ol.format.GeoJSON();
var features_REGIONI_2 = format_REGIONI_2.readFeatures(json_REGIONI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONI_2.addFeatures(features_REGIONI_2);
var lyr_REGIONI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONI_2, 
                style: style_REGIONI_2,
                popuplayertitle: 'REGIONI ',
                interactive: false,
                title: '<img src="styles/legend/REGIONI_2.png" /> REGIONI '
            });
var format_COMUNE_3 = new ol.format.GeoJSON();
var features_COMUNE_3 = format_COMUNE_3.readFeatures(json_COMUNE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNE_3.addFeatures(features_COMUNE_3);
var lyr_COMUNE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNE_3, 
                style: style_COMUNE_3,
                popuplayertitle: 'COMUNE',
                interactive: true,
                title: '<img src="styles/legend/COMUNE_3.png" /> COMUNE'
            });
var format_Po_4 = new ol.format.GeoJSON();
var features_Po_4 = format_Po_4.readFeatures(json_Po_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Po_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Po_4.addFeatures(features_Po_4);
var lyr_Po_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Po_4, 
                style: style_Po_4,
                popuplayertitle: 'Po',
                interactive: true,
                title: '<img src="styles/legend/Po_4.png" /> Po'
            });
var format_FIUMI_5 = new ol.format.GeoJSON();
var features_FIUMI_5 = format_FIUMI_5.readFeatures(json_FIUMI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIUMI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIUMI_5.addFeatures(features_FIUMI_5);
var lyr_FIUMI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIUMI_5, 
                style: style_FIUMI_5,
                popuplayertitle: 'FIUMI',
                interactive: true,
                title: '<img src="styles/legend/FIUMI_5.png" /> FIUMI'
            });
var format_allagamentiriporiettato_6 = new ol.format.GeoJSON();
var features_allagamentiriporiettato_6 = format_allagamentiriporiettato_6.readFeatures(json_allagamentiriporiettato_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allagamentiriporiettato_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allagamentiriporiettato_6.addFeatures(features_allagamentiriporiettato_6);
var lyr_allagamentiriporiettato_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allagamentiriporiettato_6, 
                style: style_allagamentiriporiettato_6,
                popuplayertitle: 'allagamenti riporiettato',
                interactive: true,
                title: '<img src="styles/legend/allagamentiriporiettato_6.png" /> allagamenti riporiettato'
            });
var group_MAPPADATI = new ol.layer.Group({
                                layers: [lyr_Po_4,lyr_FIUMI_5,lyr_allagamentiriporiettato_6,],
                                fold: 'open',
                                title: 'MAPPA DATI'});
var group_MAPPABASE = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_PROVINCIA_1,lyr_REGIONI_2,lyr_COMUNE_3,],
                                fold: 'open',
                                title: 'MAPPA BASE'});

lyr_OSMStandard_0.setVisible(true);lyr_PROVINCIA_1.setVisible(true);lyr_REGIONI_2.setVisible(true);lyr_COMUNE_3.setVisible(true);lyr_Po_4.setVisible(true);lyr_FIUMI_5.setVisible(true);lyr_allagamentiriporiettato_6.setVisible(true);
var layersList = [group_MAPPABASE,group_MAPPADATI];
lyr_PROVINCIA_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_REGIONI_2.set('fieldAliases', {'cod_reg': 'cod_reg', 'den_reg': 'den_reg', 'diss': 'diss', });
lyr_COMUNE_3.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Po_4.set('fieldAliases', {'CODICE': 'CODICE', 'APPOSI': 'APPOSI', 'NOME': 'NOME', 'ORDINE': 'ORDINE', 'TY_CMP': 'TY_CMP', 'D_TY_CMP': 'D_TY_CMP', 'NOME_S': 'NOME_S', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', });
lyr_FIUMI_5.set('fieldAliases', {'ID_E': 'ID_E', 'AGVAL': 'AGVAL', 'TY_NAT': 'TY_NAT', 'D_TY_NAT': 'D_TY_NAT', 'TY_SED': 'TY_SED', 'D_TY_SED': 'D_TY_SED', });
lyr_allagamentiriporiettato_6.set('fieldAliases', {'Id': 'Id', 'Tipo_Allag': 'Tipo_Allag', });
lyr_PROVINCIA_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_REGIONI_2.set('fieldImages', {'cod_reg': 'TextEdit', 'den_reg': 'TextEdit', 'diss': 'TextEdit', });
lyr_COMUNE_3.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Po_4.set('fieldImages', {'CODICE': '', 'APPOSI': '', 'NOME': '', 'ORDINE': '', 'TY_CMP': '', 'D_TY_CMP': '', 'NOME_S': '', 'TY_E': '', 'ID_E': '', 'DT_INI_VAL': '', 'DATA_AGG': '', 'D_TIPO_AGG': '', 'DT_PRES': '', 'ST_VALID': '', 'ST_CERTIF': '', 'QUALITA': '', 'METODO': '', 'D_METODO': '', 'COMP_FONTI': '', 'SEZ_ID_E': '', 'TIPO_FONTE': '', 'DATA_DA': '', 'DATA_A': '', });
lyr_FIUMI_5.set('fieldImages', {'ID_E': 'TextEdit', 'AGVAL': 'TextEdit', 'TY_NAT': 'Range', 'D_TY_NAT': 'TextEdit', 'TY_SED': 'Range', 'D_TY_SED': 'TextEdit', });
lyr_allagamentiriporiettato_6.set('fieldImages', {'Id': '', 'Tipo_Allag': '', });
lyr_PROVINCIA_1.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'DEN_PROV': 'header label - visible with data', 'DEN_CM': 'hidden field', 'DEN_UTS': 'header label - visible with data', 'SIGLA': 'header label - visible with data', 'TIPO_UTS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_REGIONI_2.set('fieldLabels', {'cod_reg': 'hidden field', 'den_reg': 'hidden field', 'diss': 'hidden field', });
lyr_COMUNE_3.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'PRO_COM': 'hidden field', 'PRO_COM_T': 'hidden field', 'COMUNE': 'header label - visible with data', 'COMUNE_A': 'hidden field', 'CC_UTS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Po_4.set('fieldLabels', {'CODICE': 'hidden field', 'APPOSI': 'no label', 'NOME': 'no label', 'ORDINE': 'hidden field', 'TY_CMP': 'hidden field', 'D_TY_CMP': 'no label', 'NOME_S': 'hidden field', 'TY_E': 'hidden field', 'ID_E': 'hidden field', 'DT_INI_VAL': 'hidden field', 'DATA_AGG': 'hidden field', 'D_TIPO_AGG': 'hidden field', 'DT_PRES': 'hidden field', 'ST_VALID': 'hidden field', 'ST_CERTIF': 'hidden field', 'QUALITA': 'hidden field', 'METODO': 'hidden field', 'D_METODO': 'hidden field', 'COMP_FONTI': 'hidden field', 'SEZ_ID_E': 'hidden field', 'TIPO_FONTE': 'hidden field', 'DATA_DA': 'hidden field', 'DATA_A': 'hidden field', });
lyr_FIUMI_5.set('fieldLabels', {'ID_E': 'hidden field', 'AGVAL': 'hidden field', 'TY_NAT': 'hidden field', 'D_TY_NAT': 'hidden field', 'TY_SED': 'hidden field', 'D_TY_SED': 'header label - visible with data', });
lyr_allagamentiriporiettato_6.set('fieldLabels', {'Id': 'hidden field', 'Tipo_Allag': 'header label - visible with data', });
lyr_allagamentiriporiettato_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});