-- A tela da loja (mri_Qappearance, remendada) chama estes callbacks: https://vel_roupa_favoritos/<nome>
-- O modelo vai junto para separar masculino e feminino.

local function modelo()
    return GetEntityModel(cache.ped)
end

RegisterNUICallback('fav_get', function(_, cb)
    cb(lib.callback.await('vel_roupa_favoritos:get', false, modelo()) or {})
end)

RegisterNUICallback('fav_toggle', function(data, cb)
    if type(data) ~= 'table' then return cb(false) end
    cb(lib.callback.await('vel_roupa_favoritos:toggle', false, modelo(), data.sec, data.id, data.on == true))
end)
