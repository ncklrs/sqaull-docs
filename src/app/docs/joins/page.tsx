"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function JoinsPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Joins</h1>

      <p className="text-xl text-text-secondary mb-8">
        Combine data from multiple tables with sqaull&apos;s intuitive join syntax.
        {isGenAlpha && " Link up those tables fr fr 🔗"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">INNER JOIN</h2>

      <p className="text-text-secondary mb-4">
        Returns only matching rows from both tables:
      </p>

      <CodeBlock
        og={`gull\`from:users join:orders on:users.id=orders.user_id sel:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   INNER JOIN orders ON users.id = orders.user_id`}
        genalpha={`gull\`main:users link:orders match:users.id=orders.user_id slay:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   INNER JOIN orders ON users.id = orders.user_id`}
        title="inner-join.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">LEFT JOIN</h2>

      <p className="text-text-secondary mb-4">
        Returns all rows from the left table, with matching rows from the right:
      </p>

      <CodeBlock
        og={`gull\`from:users join:orders/left on:users.id=orders.user_id sel:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   LEFT JOIN orders ON users.id = orders.user_id`}
        genalpha={`gull\`main:users link:orders/left match:users.id=orders.user_id slay:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   LEFT JOIN orders ON users.id = orders.user_id`}
        title="left-join.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">RIGHT JOIN</h2>

      <CodeBlock
        og={`gull\`from:users join:orders/right on:users.id=orders.user_id sel:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   RIGHT JOIN orders ON users.id = orders.user_id`}
        genalpha={`gull\`main:users link:orders/right match:users.id=orders.user_id slay:users.name,orders.total\`
// → SELECT users.name, orders.total
//   FROM users
//   RIGHT JOIN orders ON users.id = orders.user_id`}
        title="right-join.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">FULL OUTER JOIN</h2>

      <CodeBlock
        og={`gull\`from:users join:orders/full on:users.id=orders.user_id sel:*\`
// → SELECT *
//   FROM users
//   FULL OUTER JOIN orders ON users.id = orders.user_id`}
        genalpha={`gull\`main:users link:orders/full match:users.id=orders.user_id slay:*\`
// → SELECT *
//   FROM users
//   FULL OUTER JOIN orders ON users.id = orders.user_id`}
        title="full-join.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Multiple Joins</h2>

      <CodeBlock
        og={`gull\`from:orders
    join:users on:orders.user_id=users.id
    join:products on:orders.product_id=products.id
    sel:users.name,products.title,orders.quantity\`
// → SELECT users.name, products.title, orders.quantity
//   FROM orders
//   INNER JOIN users ON orders.user_id = users.id
//   INNER JOIN products ON orders.product_id = products.id`}
        genalpha={`gull\`main:orders
    link:users match:orders.user_id=users.id
    link:products match:orders.product_id=products.id
    slay:users.name,products.title,orders.quantity\`
// → SELECT users.name, products.title, orders.quantity
//   FROM orders
//   INNER JOIN users ON orders.user_id = users.id
//   INNER JOIN products ON orders.product_id = products.id`}
        title="multiple-joins.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Table Aliases</h2>

      <CodeBlock
        og={`gull\`from:users@u join:orders@o on:u.id=o.user_id sel:u.name,o.total\`
// → SELECT u.name, o.total
//   FROM users u
//   INNER JOIN orders o ON u.id = o.user_id`}
        genalpha={`gull\`main:users@u link:orders@o match:u.id=o.user_id slay:u.name,o.total\`
// → SELECT u.name, o.total
//   FROM users u
//   INNER JOIN orders o ON u.id = o.user_id`}
        title="aliases.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Self Joins</h2>

      <CodeBlock
        og={`// Find employees and their managers
gull\`from:employees@e join:employees@m/left on:e.manager_id=m.id sel:e.name@employee,m.name@manager\`
// → SELECT e.name AS employee, m.name AS manager
//   FROM employees e
//   LEFT JOIN employees m ON e.manager_id = m.id`}
        genalpha={`// Find employees and their managers
gull\`main:employees@e link:employees@m/left match:e.manager_id=m.id slay:e.name@employee,m.name@manager\`
// → SELECT e.name AS employee, m.name AS manager
//   FROM employees e
//   LEFT JOIN employees m ON e.manager_id = m.id`}
        title="self-join.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Join with Conditions</h2>

      <CodeBlock
        og={`// Join with additional WHERE
gull\`from:users join:orders on:users.id=orders.user_id sel:* whr:orders.status=completed whr:users.active=true\`
// → SELECT *
//   FROM users
//   INNER JOIN orders ON users.id = orders.user_id
//   WHERE orders.status = $1 AND users.active = $2`}
        genalpha={`// Join with additional WHERE
gull\`main:users link:orders match:users.id=orders.user_id slay:* sus:orders.status=completed sus:users.active=true\`
// → SELECT *
//   FROM users
//   INNER JOIN orders ON users.id = orders.user_id
//   WHERE orders.status = $1 AND users.active = $2`}
        title="join-conditions.ts"
      />

      <div className="feature-card bg-neon-cyan/5 border-neon-cyan/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-cyan">Performance Tip</h3>
        <p className="text-text-secondary text-sm">
          Always specify only the columns you need in SELECT instead of using *.
          This reduces data transfer and improves query performance, especially with joins.
        </p>
      </div>
    </article>
  );
}
