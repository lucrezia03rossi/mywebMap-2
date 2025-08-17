var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REGIONI_1 = new ol.format.GeoJSON();
var features_REGIONI_1 = format_REGIONI_1.readFeatures(json_REGIONI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONI_1.addFeatures(features_REGIONI_1);
var lyr_REGIONI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONI_1, 
                style: style_REGIONI_1,
                popuplayertitle: 'REGIONI ',
                interactive: true,
                title: '<img src="styles/legend/REGIONI_1.png" /> REGIONI '
            });
var format_PROVINCIA_2 = new ol.format.GeoJSON();
var features_PROVINCIA_2 = format_PROVINCIA_2.readFeatures(json_PROVINCIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIA_2.addFeatures(features_PROVINCIA_2);
var lyr_PROVINCIA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIA_2, 
                style: style_PROVINCIA_2,
                popuplayertitle: 'PROVINCIA',
                interactive: true,
                title: '<img src="styles/legend/PROVINCIA_2.png" /> PROVINCIA'
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
var format_FIUMI_4 = new ol.format.GeoJSON();
var features_FIUMI_4 = format_FIUMI_4.readFeatures(json_FIUMI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIUMI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIUMI_4.addFeatures(features_FIUMI_4);
var lyr_FIUMI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIUMI_4, 
                style: style_FIUMI_4,
                popuplayertitle: 'FIUMI',
                interactive: true,
                title: '<img src="styles/legend/FIUMI_4.png" /> FIUMI'
            });
var format_CORSOPRINCIPALEFIUMEPO_5 = new ol.format.GeoJSON();
var features_CORSOPRINCIPALEFIUMEPO_5 = format_CORSOPRINCIPALEFIUMEPO_5.readFeatures(json_CORSOPRINCIPALEFIUMEPO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORSOPRINCIPALEFIUMEPO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORSOPRINCIPALEFIUMEPO_5.addFeatures(features_CORSOPRINCIPALEFIUMEPO_5);
var lyr_CORSOPRINCIPALEFIUMEPO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORSOPRINCIPALEFIUMEPO_5, 
                style: style_CORSOPRINCIPALEFIUMEPO_5,
                popuplayertitle: 'CORSO PRINCIPALE FIUME PO',
                interactive: true,
                title: '<img src="styles/legend/CORSOPRINCIPALEFIUMEPO_5.png" /> CORSO PRINCIPALE FIUME PO'
            });
var format_AREEALLAGATE_6 = new ol.format.GeoJSON();
var features_AREEALLAGATE_6 = format_AREEALLAGATE_6.readFeatures(json_AREEALLAGATE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREEALLAGATE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREEALLAGATE_6.addFeatures(features_AREEALLAGATE_6);
var lyr_AREEALLAGATE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREEALLAGATE_6, 
                style: style_AREEALLAGATE_6,
                popuplayertitle: 'AREE ALLAGATE',
                interactive: true,
                title: '<img src="styles/legend/AREEALLAGATE_6.png" /> AREE ALLAGATE'
            });
var format_SEGNALAZIONIALLAGAMENTI2019_7 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2019_7 = format_SEGNALAZIONIALLAGAMENTI2019_7.readFeatures(json_SEGNALAZIONIALLAGAMENTI2019_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2019_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2019_7.addFeatures(features_SEGNALAZIONIALLAGAMENTI2019_7);
var lyr_SEGNALAZIONIALLAGAMENTI2019_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2019_7, 
                style: style_SEGNALAZIONIALLAGAMENTI2019_7,
                popuplayertitle: 'SEGNALAZIONI ALLAGAMENTI 2019',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2019_7.png" /> SEGNALAZIONI ALLAGAMENTI 2019'
            });
var format_SEGNALAZIONIALLAGAMENTI2018_8 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2018_8 = format_SEGNALAZIONIALLAGAMENTI2018_8.readFeatures(json_SEGNALAZIONIALLAGAMENTI2018_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2018_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2018_8.addFeatures(features_SEGNALAZIONIALLAGAMENTI2018_8);
var lyr_SEGNALAZIONIALLAGAMENTI2018_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2018_8, 
                style: style_SEGNALAZIONIALLAGAMENTI2018_8,
                popuplayertitle: 'SEGNALAZIONI ALLAGAMENTI 2018',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2018_8.png" /> SEGNALAZIONI ALLAGAMENTI 2018'
            });
var format_SEGNALAZIONIALLAGAMENTI2017_9 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2017_9 = format_SEGNALAZIONIALLAGAMENTI2017_9.readFeatures(json_SEGNALAZIONIALLAGAMENTI2017_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2017_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2017_9.addFeatures(features_SEGNALAZIONIALLAGAMENTI2017_9);
var lyr_SEGNALAZIONIALLAGAMENTI2017_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2017_9, 
                style: style_SEGNALAZIONIALLAGAMENTI2017_9,
                popuplayertitle: 'SEGNALAZIONI ALLAGAMENTI 2017 ',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2017_9.png" /> SEGNALAZIONI ALLAGAMENTI 2017 '
            });
var format_SEGNALAZIONIALLAGAMENTI2016_10 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2016_10 = format_SEGNALAZIONIALLAGAMENTI2016_10.readFeatures(json_SEGNALAZIONIALLAGAMENTI2016_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2016_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2016_10.addFeatures(features_SEGNALAZIONIALLAGAMENTI2016_10);
var lyr_SEGNALAZIONIALLAGAMENTI2016_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2016_10, 
                style: style_SEGNALAZIONIALLAGAMENTI2016_10,
                popuplayertitle: 'SEGNALAZIONI  ALLAGAMENTI 2016',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2016_10.png" /> SEGNALAZIONI  ALLAGAMENTI 2016'
            });
var format_SEGNALAZIONIALLAGAMENTI2015_11 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2015_11 = format_SEGNALAZIONIALLAGAMENTI2015_11.readFeatures(json_SEGNALAZIONIALLAGAMENTI2015_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2015_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2015_11.addFeatures(features_SEGNALAZIONIALLAGAMENTI2015_11);
var lyr_SEGNALAZIONIALLAGAMENTI2015_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2015_11, 
                style: style_SEGNALAZIONIALLAGAMENTI2015_11,
                popuplayertitle: 'SEGNALAZIONI ALLAGAMENTI 2015',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2015_11.png" /> SEGNALAZIONI ALLAGAMENTI 2015'
            });
var format_SEGNALAZIONIALLAGAMENTI2022_12 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2022_12 = format_SEGNALAZIONIALLAGAMENTI2022_12.readFeatures(json_SEGNALAZIONIALLAGAMENTI2022_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2022_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2022_12.addFeatures(features_SEGNALAZIONIALLAGAMENTI2022_12);
var lyr_SEGNALAZIONIALLAGAMENTI2022_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2022_12, 
                style: style_SEGNALAZIONIALLAGAMENTI2022_12,
                popuplayertitle: 'SEGNALAZIONI ALLAGAMENTI 2022',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2022_12.png" /> SEGNALAZIONI ALLAGAMENTI 2022'
            });
var format_SEGNALAZIONIALLAGAMENTI2020_13 = new ol.format.GeoJSON();
var features_SEGNALAZIONIALLAGAMENTI2020_13 = format_SEGNALAZIONIALLAGAMENTI2020_13.readFeatures(json_SEGNALAZIONIALLAGAMENTI2020_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGNALAZIONIALLAGAMENTI2020_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEGNALAZIONIALLAGAMENTI2020_13.addFeatures(features_SEGNALAZIONIALLAGAMENTI2020_13);
var lyr_SEGNALAZIONIALLAGAMENTI2020_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEGNALAZIONIALLAGAMENTI2020_13, 
                style: style_SEGNALAZIONIALLAGAMENTI2020_13,
                popuplayertitle: 'SEGNALAZIONI  ALLAGAMENTI 2020 ',
                interactive: true,
                title: '<img src="styles/legend/SEGNALAZIONIALLAGAMENTI2020_13.png" /> SEGNALAZIONI  ALLAGAMENTI 2020 '
            });
var group_SEGNALAZIONIANNUALI = new ol.layer.Group({
                                layers: [lyr_AREEALLAGATE_6,lyr_SEGNALAZIONIALLAGAMENTI2019_7,lyr_SEGNALAZIONIALLAGAMENTI2018_8,lyr_SEGNALAZIONIALLAGAMENTI2017_9,lyr_SEGNALAZIONIALLAGAMENTI2016_10,lyr_SEGNALAZIONIALLAGAMENTI2015_11,lyr_SEGNALAZIONIALLAGAMENTI2022_12,lyr_SEGNALAZIONIALLAGAMENTI2020_13,],
                                fold: 'open',
                                title: 'SEGNALAZIONI ANNUALI'});
var group_ORGANIZZAZIONERETEIDRICA = new ol.layer.Group({
                                layers: [lyr_FIUMI_4,lyr_CORSOPRINCIPALEFIUMEPO_5,],
                                fold: 'open',
                                title: 'ORGANIZZAZIONE RETE IDRICA'});
var group_ORGANIZZAZIONEAMMINISTRATIVA = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_REGIONI_1,lyr_PROVINCIA_2,lyr_COMUNE_3,],
                                fold: 'open',
                                title: 'ORGANIZZAZIONE AMMINISTRATIVA'});

lyr_OSMStandard_0.setVisible(true);lyr_REGIONI_1.setVisible(true);lyr_PROVINCIA_2.setVisible(true);lyr_COMUNE_3.setVisible(true);lyr_FIUMI_4.setVisible(true);lyr_CORSOPRINCIPALEFIUMEPO_5.setVisible(true);lyr_AREEALLAGATE_6.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2019_7.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2018_8.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2017_9.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2016_10.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2015_11.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2022_12.setVisible(true);lyr_SEGNALAZIONIALLAGAMENTI2020_13.setVisible(true);
var layersList = [group_ORGANIZZAZIONEAMMINISTRATIVA,group_ORGANIZZAZIONERETEIDRICA,group_SEGNALAZIONIANNUALI];
lyr_REGIONI_1.set('fieldAliases', {'cod_reg': 'cod_reg', 'den_reg': 'den_reg', 'diss': 'diss', });
lyr_PROVINCIA_2.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_COMUNE_3.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_FIUMI_4.set('fieldAliases', {'ID_E': 'ID_E', 'AGVAL': 'AGVAL', 'TY_NAT': 'TY_NAT', 'D_TY_NAT': 'D_TY_NAT', 'TY_SED': 'TY_SED', 'D_TY_SED': 'D_TY_SED', });
lyr_CORSOPRINCIPALEFIUMEPO_5.set('fieldAliases', {'CODICE': 'CODICE', 'APPOSI': 'APPOSI', 'NOME': 'NOME', 'ORDINE': 'ORDINE', 'TY_CMP': 'TY_CMP', 'D_TY_CMP': 'D_TY_CMP', 'NOME_S': 'NOME_S', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', });
lyr_AREEALLAGATE_6.set('fieldAliases', {'Id': 'Id', 'Tipo_Allag': 'Tipo_Allag', });
lyr_SEGNALAZIONIALLAGAMENTI2019_7.set('fieldAliases', {'DATA_SEGNA': 'DATA_SEGNA', 'FONTE': 'FONTE', 'TIPO_DI_SE': 'TIPO_DI_SE', 'anno': 'anno', 'ANNO ': 'ANNO ', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2018_8.set('fieldAliases', {'fid': 'fid', 'DATA_SEGNA': 'DATA_SEGNA', 'FONTE': 'FONTE', 'TIPO_DI_SE': 'TIPO_DI_SE', 'anno': 'anno', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2017_9.set('fieldAliases', {'fid': 'fid', 'DATA_SEGNA': 'DATA_SEGNA', 'FONTE': 'FONTE', 'TIPO_DI_SE': 'TIPO_DI_SE', 'anno': 'anno', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2016_10.set('fieldAliases', {'fid': 'fid', 'DATA_SEGNA': 'DATA_SEGNA', 'FONTE': 'FONTE', 'TIPO_DI_SE': 'TIPO_DI_SE', 'anno': 'anno', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2015_11.set('fieldAliases', {'fid': 'fid', 'DATA_SEGNA': 'DATA_SEGNA', 'FONTE': 'FONTE', 'TIPO_DI_SE': 'TIPO_DI_SE', 'anno': 'anno', 'anni_uniti ': 'anni_uniti ', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2022_12.set('fieldAliases', {'TIPO_DANNI': 'TIPO_DANNI', 'DESCRIZION': 'DESCRIZION', 'DATE': 'DATE', 'FONTE': 'FONTE', 'anno': 'anno', 'anni_uniti': 'anni_uniti', });
lyr_SEGNALAZIONIALLAGAMENTI2020_13.set('fieldAliases', {'fid': 'fid', 'TIPO_DANNI': 'TIPO_DANNI', 'DESCRIZION': 'DESCRIZION', 'DATE': 'DATE', 'FONTE': 'FONTE', 'anno': 'anno', 'anni_uniti': 'anni_uniti', });
lyr_REGIONI_1.set('fieldImages', {'cod_reg': 'TextEdit', 'den_reg': 'TextEdit', 'diss': 'TextEdit', });
lyr_PROVINCIA_2.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_COMUNE_3.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FIUMI_4.set('fieldImages', {'ID_E': 'TextEdit', 'AGVAL': 'TextEdit', 'TY_NAT': 'Range', 'D_TY_NAT': 'TextEdit', 'TY_SED': 'Range', 'D_TY_SED': 'TextEdit', });
lyr_CORSOPRINCIPALEFIUMEPO_5.set('fieldImages', {'CODICE': 'TextEdit', 'APPOSI': 'TextEdit', 'NOME': 'TextEdit', 'ORDINE': 'Range', 'TY_CMP': 'Range', 'D_TY_CMP': 'TextEdit', 'NOME_S': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'Range', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', });
lyr_AREEALLAGATE_6.set('fieldImages', {'Id': 'TextEdit', 'Tipo_Allag': 'TextEdit', });
lyr_SEGNALAZIONIALLAGAMENTI2019_7.set('fieldImages', {'DATA_SEGNA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_DI_SE': 'TextEdit', 'anno': '', 'ANNO ': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2018_8.set('fieldImages', {'fid': 'TextEdit', 'DATA_SEGNA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_DI_SE': 'TextEdit', 'anno': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2017_9.set('fieldImages', {'fid': 'TextEdit', 'DATA_SEGNA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_DI_SE': 'TextEdit', 'anno': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2016_10.set('fieldImages', {'fid': 'TextEdit', 'DATA_SEGNA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_DI_SE': 'TextEdit', 'anno': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2015_11.set('fieldImages', {'fid': 'TextEdit', 'DATA_SEGNA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_DI_SE': 'TextEdit', 'anno': '', 'anni_uniti ': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2022_12.set('fieldImages', {'TIPO_DANNI': 'TextEdit', 'DESCRIZION': 'TextEdit', 'DATE': 'DateTime', 'FONTE': 'TextEdit', 'anno': '', 'anni_uniti': '', });
lyr_SEGNALAZIONIALLAGAMENTI2020_13.set('fieldImages', {'fid': 'TextEdit', 'TIPO_DANNI': 'TextEdit', 'DESCRIZION': 'TextEdit', 'DATE': 'DateTime', 'FONTE': 'TextEdit', 'anno': '', 'anni_uniti': '', });
lyr_REGIONI_1.set('fieldLabels', {'cod_reg': 'hidden field', 'den_reg': 'header label - visible with data', 'diss': 'hidden field', });
lyr_PROVINCIA_2.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'DEN_PROV': 'header label - visible with data', 'DEN_CM': 'hidden field', 'DEN_UTS': 'header label - visible with data', 'SIGLA': 'header label - visible with data', 'TIPO_UTS': 'header label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_COMUNE_3.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'PRO_COM': 'hidden field', 'PRO_COM_T': 'hidden field', 'COMUNE': 'header label - visible with data', 'COMUNE_A': 'hidden field', 'CC_UTS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FIUMI_4.set('fieldLabels', {'ID_E': 'hidden field', 'AGVAL': 'hidden field', 'TY_NAT': 'hidden field', 'D_TY_NAT': 'hidden field', 'TY_SED': 'hidden field', 'D_TY_SED': 'header label - visible with data', });
lyr_CORSOPRINCIPALEFIUMEPO_5.set('fieldLabels', {'CODICE': 'hidden field', 'APPOSI': 'header label - visible with data', 'NOME': 'header label - visible with data', 'ORDINE': 'hidden field', 'TY_CMP': 'hidden field', 'D_TY_CMP': 'header label - visible with data', 'NOME_S': 'hidden field', 'TY_E': 'hidden field', 'ID_E': 'hidden field', 'DT_INI_VAL': 'hidden field', 'DATA_AGG': 'hidden field', 'D_TIPO_AGG': 'hidden field', 'DT_PRES': 'hidden field', 'ST_VALID': 'hidden field', 'ST_CERTIF': 'hidden field', 'QUALITA': 'hidden field', 'METODO': 'hidden field', 'D_METODO': 'hidden field', 'COMP_FONTI': 'hidden field', 'SEZ_ID_E': 'hidden field', 'TIPO_FONTE': 'hidden field', 'DATA_DA': 'hidden field', 'DATA_A': 'hidden field', });
lyr_AREEALLAGATE_6.set('fieldLabels', {'Id': 'hidden field', 'Tipo_Allag': 'header label - visible with data', });
lyr_SEGNALAZIONIALLAGAMENTI2019_7.set('fieldLabels', {'DATA_SEGNA': 'hidden field', 'FONTE': 'hidden field', 'TIPO_DI_SE': 'header label - visible with data', 'anno': 'header label - visible with data', 'ANNO ': 'hidden field', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2018_8.set('fieldLabels', {'fid': 'hidden field', 'DATA_SEGNA': 'hidden field', 'FONTE': 'hidden field', 'TIPO_DI_SE': 'header label - visible with data', 'anno': 'header label - visible with data', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2017_9.set('fieldLabels', {'fid': 'hidden field', 'DATA_SEGNA': 'hidden field', 'FONTE': 'hidden field', 'TIPO_DI_SE': 'header label - visible with data', 'anno': 'header label - visible with data', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2016_10.set('fieldLabels', {'fid': 'hidden field', 'DATA_SEGNA': 'hidden field', 'FONTE': 'hidden field', 'TIPO_DI_SE': 'header label - visible with data', 'anno': 'header label - visible with data', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2015_11.set('fieldLabels', {'fid': 'hidden field', 'DATA_SEGNA': 'hidden field', 'FONTE': 'hidden field', 'TIPO_DI_SE': 'header label - visible with data', 'anno': 'header label - visible with data', 'anni_uniti ': 'hidden field', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2022_12.set('fieldLabels', {'TIPO_DANNI': 'header label - visible with data', 'DESCRIZION': 'header label - visible with data', 'DATE': 'hidden field', 'FONTE': 'hidden field', 'anno': 'header label - visible with data', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2020_13.set('fieldLabels', {'fid': 'hidden field', 'TIPO_DANNI': 'header label - visible with data', 'DESCRIZION': 'header label - visible with data', 'DATE': 'hidden field', 'FONTE': 'hidden field', 'anno': 'header label - visible with data', 'anni_uniti': 'hidden field', });
lyr_SEGNALAZIONIALLAGAMENTI2020_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});