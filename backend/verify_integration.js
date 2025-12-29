require('dotenv').config(); // Now in the same dir
const { createClient } = require('@supabase/supabase-js');

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('--- SABROTORTAS INTEGRATION TEST ---\n');

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Falta configuración en .env');
    console.log('URL:', !!SUPABASE_URL);
    console.log('ANON:', !!SUPABASE_ANON_KEY);
    console.log('SERVICE:', !!SUPABASE_SERVICE_KEY);
    process.exit(1);
}

// Clientes
const publicClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const adminClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function testPublicInsert() {
    console.log('1️⃣  TEST: Public Insert via ANON KEY (Landing Form Simulation)');
    const fakeData = {
        nombre: 'Test Robot',
        email: `test_${Date.now()}@robot.com`,
        telefono: '+56900000000',
        servicio: 'Tortas Decoradas',
        mensaje: 'Prueba de integración automática'
    };

    const { data, error } = await publicClient
        .from('solicitudes')
        .insert([fakeData])
        .select()
        .single();

    if (error) {
        console.error('❌ FAILED: No se pudo insertar con ANON KEY.');
        console.error(error);
        return null;
    } else {
        console.log('✅ SUCCESS: Solicitud creada correctamente.');
        console.log(`   ID: ${data.id}, Estado: ${data.estado}`);
        return data.id;
    }
}

async function testAdminAccess(id) {
    if (!id) return;

    console.log('\n2️⃣  TEST: Admin Access via SERVICE ROLE KEY (Backend Simulation)');
    const { data, error } = await adminClient
        .from('solicitudes')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !data) {
        console.error('❌ FAILED: Admin no pudo leer la solicitud.');
    } else {
        console.log('✅ SUCCESS: Admin pudo leer la solicitud creada públicamente.');
    }
}

async function testCorporateSchema() {
    console.log('\n3️⃣  TEST: Corporate Schema (Empresa Columns)');

    // Intentar insertar un cliente con campo 'empresa'
    const corporateClient = {
        nombre: 'Gerente Compras',
        email: `corp_${Date.now()}@bigcorp.com`,
        telefono: '+5699999999',
        empresa: 'Big Corp S.A.', // CAMPO NUEVO
        tipo_cliente: 'empresa'  // CAMPO NUEVO
    };

    const { data, error } = await adminClient
        .from('clientes')
        .insert([corporateClient])
        .select()
        .single();

    if (error) {
        console.error('❌ FAILED: Error insertando cliente corporativo.');
        console.error('   ¿Se corrió el script SQL actualizado? El error sugiere que faltan columnas.');
        console.error(error);
    } else {
        console.log('✅ SUCCESS: Cliente Corporativo insertado exitosamente.');
        console.log(`   Empresa: ${data.empresa}, Tipo: ${data.tipo_cliente}`);
    }
}

async function run() {
    const id = await testPublicInsert();
    await testAdminAccess(id);
    await testCorporateSchema();
    console.log('\n--- TEST FINISHED ---');
}

run();
