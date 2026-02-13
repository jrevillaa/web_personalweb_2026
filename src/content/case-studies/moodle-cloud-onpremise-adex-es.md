---
title: 'Migración Moodle Cloud → On-Premise (ADEX)'
description: 'Migración de Moodle 3.8 desde servidor cloud hacia infraestructura on-premise en CentOS 7, con SSL y buenas prácticas.'
date: 2021-12-01
client: 'ADEX - Asociación de Exportadores'
tags: ['Moodle 3.8', 'On-Premise', 'CentOS 7', 'SSL', 'Hardening']
lang: 'es'
---

## El Reto
Trasladar la plataforma Moodle desde la nube hacia un servidor administrado por el cliente (on-premise), garantizando continuidad, seguridad (dominio/SSL) y estabilidad post-migración.

## La Solución
Ejecutamos una migración controlada:
* Preparación del ambiente Linux **CentOS 7** para Moodle.
* Migración de Moodle desde servidor **Cloud** a **On-Premise**.
* Configuración de **dominios y SSL**.
* Aplicación de buenas prácticas de configuración y optimización (cron, cachés, salud del sitio).

## Resultados
* Moodle funcionando en infraestructura **on-premise** bajo control del cliente.
* Plataforma accesible bajo dominio seguro con **SSL**.
* Operación más estable y lista para el siguiente paso de upgrade.
