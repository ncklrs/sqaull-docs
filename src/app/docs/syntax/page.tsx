import { CodeBlock } from "@/components/CodeBlock";

export default function SyntaxPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Syntax Reference</h1>

      <p className="text-xl text-text-secondary mb-8">
        Complete reference for all genaql utilities, modifiers, and operators.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Clauses</h2>

      <p className="text-text-secondary mb-4">
        These utilities map directly to SQL clauses. Use colons to separate the utility from its value.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Syntax</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">SQL Equivalent</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">main:</code></td>
              <td className="py-3 px-4 text-text-secondary">FROM</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">main:users</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">slay:</code></td>
              <td className="py-3 px-4 text-text-secondary">SELECT</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">slay:name,email</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">sus:</code></td>
              <td className="py-3 px-4 text-text-secondary">WHERE</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:age&gt;18</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">vibe:</code></td>
              <td className="py-3 px-4 text-text-secondary">ORDER BY</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">vibe:name/desc</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">bet:</code></td>
              <td className="py-3 px-4 text-text-secondary">LIMIT</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">bet:10</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">skip:</code></td>
              <td className="py-3 px-4 text-text-secondary">OFFSET</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">skip:20</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">squad:</code></td>
              <td className="py-3 px-4 text-text-secondary">GROUP BY</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">squad:user_id</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">tea:</code></td>
              <td className="py-3 px-4 text-text-secondary">HAVING</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">tea:cnt:*&gt;5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Write Operations</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Syntax</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">SQL Equivalent</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">nocap:</code></td>
              <td className="py-3 px-4 text-text-secondary">INSERT INTO</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">nocap:users</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">drip:</code></td>
              <td className="py-3 px-4 text-text-secondary">(columns)</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">drip:name,email</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">fire:</code></td>
              <td className="py-3 px-4 text-text-secondary">VALUES</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">fire:john,john@test.com</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">glow:</code></td>
              <td className="py-3 px-4 text-text-secondary">UPDATE</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">glow:users</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">rizz:</code></td>
              <td className="py-3 px-4 text-text-secondary">SET</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">rizz:name=john</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">yeet:</code></td>
              <td className="py-3 px-4 text-text-secondary">DELETE FROM</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">yeet:sessions</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">flex:</code></td>
              <td className="py-3 px-4 text-text-secondary">RETURNING</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">flex:id</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Operators</h2>

      <p className="text-text-secondary mb-4">
        Use these operators in WHERE conditions:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Operator</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Meaning</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-operator">&gt;</code></td>
              <td className="py-3 px-4 text-text-secondary">Greater than</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:age&gt;18</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">&lt;</code></td>
              <td className="py-3 px-4 text-text-secondary">Less than</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:price&lt;100</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">&gt;=</code></td>
              <td className="py-3 px-4 text-text-secondary">Greater or equal</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:age&gt;=21</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">&lt;=</code></td>
              <td className="py-3 px-4 text-text-secondary">Less or equal</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:qty&lt;=0</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">=</code></td>
              <td className="py-3 px-4 text-text-secondary">Equals</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:status=active</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">!=</code></td>
              <td className="py-3 px-4 text-text-secondary">Not equals</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:role!=admin</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">~</code></td>
              <td className="py-3 px-4 text-text-secondary">LIKE</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:name~john%</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">.in()</code></td>
              <td className="py-3 px-4 text-text-secondary">IN</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:id.in(1,2,3)</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">.null</code></td>
              <td className="py-3 px-4 text-text-secondary">IS NULL</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:deleted_at.null</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-operator">.!null</code></td>
              <td className="py-3 px-4 text-text-secondary">IS NOT NULL</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sus:email.!null</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Logical Operators</h2>

      <p className="text-text-secondary mb-4">
        Combine conditions with AND and OR:
      </p>

      <CodeBlock
        code={`// AND - multiple sus clauses or comma-separated
main:users sus:age>18 sus:status=active
main:users sus:age>18,status=active

// OR - pipe within sus
main:users sus:role=admin|role=moderator`}
        title="logical.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Aggregate Functions</h2>

      <p className="text-text-secondary mb-4">
        Use these prefixes for aggregate functions:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Prefix</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Function</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-function">sum:</code></td>
              <td className="py-3 px-4 text-text-secondary">SUM()</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sel:sum:total</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">cnt:</code></td>
              <td className="py-3 px-4 text-text-secondary">COUNT()</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sel:cnt:*</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">avg:</code></td>
              <td className="py-3 px-4 text-text-secondary">AVG()</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sel:avg:price</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">min:</code></td>
              <td className="py-3 px-4 text-text-secondary">MIN()</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sel:min:created_at</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">max:</code></td>
              <td className="py-3 px-4 text-text-secondary">MAX()</td>
              <td className="py-3 px-4 text-text-muted font-mono text-xs">sel:max:price</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Modifiers</h2>

      <p className="text-text-secondary mb-4">
        Add modifiers using slashes:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">Order Direction</h3>
          <code className="text-sm block mb-2">vibe:name<span className="code-operator">/desc</span></code>
          <code className="text-sm block">vibe:created_at<span className="code-operator">/asc</span></code>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">Join Types</h3>
          <code className="text-sm block mb-2">link:orders<span className="code-operator">/left</span></code>
          <code className="text-sm block mb-2">link:products<span className="code-operator">/right</span></code>
          <code className="text-sm block">link:categories<span className="code-operator">/full</span></code>
        </div>
      </div>
    </article>
  );
}
