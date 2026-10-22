-- Favoritos por personagem (citizenid) e modelo, no KVP do servidor (sem tabela no banco).
-- Formato: { [secao] = { [idDaPeca] = true } }, secao = aba da loja (masks, jackets, hats...).

local LIMITE_POR_SECAO = 300

local function chave(source, modelo)
    local player = exports.qbx_core:GetPlayer(source)
    local cid = player and player.PlayerData and player.PlayerData.citizenid
    if not cid or type(modelo) ~= 'number' then return end
    return ('fav:%s:%d'):format(cid, modelo)
end

local function ler(k)
    local ok, t = pcall(json.decode, GetResourceKvpString(k) or '{}')
    return ok and type(t) == 'table' and t or {}
end

lib.callback.register('vel_roupa_favoritos:get', function(source, modelo)
    local k = chave(source, modelo)
    return k and ler(k) or {}
end)

lib.callback.register('vel_roupa_favoritos:toggle', function(source, modelo, secao, id, ligar)
    local k = chave(source, modelo)
    -- secao e id vem da tela: so texto curto e simples
    if not k or type(secao) ~= 'string' or not secao:match('^[%w_]+$') or #secao > 32 then return false end
    id = tostring(id)
    if not id:match('^%-?%d+$') then return false end
    local t = ler(k)
    t[secao] = t[secao] or {}
    if ligar then
        local n = 0
        for _ in pairs(t[secao]) do n = n + 1 end
        if n >= LIMITE_POR_SECAO then return false end
        t[secao][id] = true
    else
        t[secao][id] = nil
        if next(t[secao]) == nil then t[secao] = nil end
    end
    SetResourceKvp(k, json.encode(t))
    return true
end)
