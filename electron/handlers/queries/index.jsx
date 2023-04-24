const getAll = `
SELECT 
  user.id, 
  '{' ||
  'user: {' ||
  'id: ' || user.id || ',' ||
  'name: "' || user.name || '",' ||
  'password: "' || user.password || '",' ||
  'role: ' || user.role ||
  '},' ||
  'todos: [' ||
  GROUP_CONCAT(
    '{' ||
    'priority: "' || t.priority || '",' ||
    'order": ' || t."order" || '",' ||
    'type": ' || t.type || '",' ||
    'timeframe: "' || t.timeframe || '",' ||
    'notes: "' || t.notes || '",' ||
    'status: "' || t.status || '",' ||
    'client: {' ||
    'id: ' || c.id || ',' ||
    'name: "' || c.name || '",' ||
    'address: "' || c.address || '",' ||
    'contact: "' || c.contact || '"' ||
    '}' ||
    '}'
    ,','
  ) ||
  ']' ||
  '}' AS user_todos
FROM user 
LEFT JOIN (
  SELECT 
    *,
    CASE priority WHEN "High" THEN 1 WHEN "Medium" THEN 2 ELSE 3 END AS priority_order
  FROM todo
  ORDER BY priority_order, "order"
) t ON user.id = t.user 
LEFT JOIN client c ON t.client = c.id
GROUP BY user.id
ORDER BY CASE user.id WHEN 1 THEN 0 WHEN 2 THEN 2 ELSE 1 END;`

module.exports = {
    getAll
};