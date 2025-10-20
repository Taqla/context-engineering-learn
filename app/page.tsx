'use client';

import Link from 'next/link';
import { Typography, Button, Space } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1}>Context Engineering: From Atoms to Unified Fields</Title>
      
      <Paragraph style={{ fontSize: '1.2em', fontStyle: 'italic', color: '#666', marginBottom: '2em' }}>
        From atoms to unified fields: The theoretical backbone of context engineering
      </Paragraph>

      <blockquote style={{ borderLeft: '4px solid #1890ff', paddingLeft: '1em', margin: '2em 0' }}>
        <Text strong>"Order emerges from the interactions of chaos."</Text>
        <br />
        <Text type="secondary">— Ilya Prigogine</Text>
      </blockquote>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>Welcome to Context Engineering</Title>
        <Paragraph>
          This learning platform provides a comprehensive journey through context engineering, 
          progressing from basic prompting concepts to advanced unified field theory. Each module 
          builds on the previous ones, creating a complete framework for understanding and 
          manipulating context in large language models.
        </Paragraph>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>The Biological Metaphor</Title>
        <Paragraph>
          Our approach is structured around a <strong>biological metaphor</strong> that provides 
          an intuitive framework for understanding the increasing complexity of context engineering:
        </Paragraph>

        <div style={{ marginTop: '2em', marginBottom: '2em', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f0f0f0' }}>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Level</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Metaphor</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Context Engineering Concept</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Module</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>1</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Atoms</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Basic instructions and prompts</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-1">Module 1</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>2</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Molecules</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Few-shot examples and demonstrations</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-2">Module 2</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>3</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Cells</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Stateful memory and conversation</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-2">Module 2</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>4</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Organs</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Multi-step applications and workflows</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-3">Module 3</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>5</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Neural Systems</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Cognitive tools and mental models</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-4">Module 4</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>6</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Neural Fields</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Continuous semantic landscapes</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-5">Module 5</Link></td>
              </tr>
              <tr>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>7</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><strong>Meta-Recursion</strong></td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Unified framework and emergence</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}><Link href="/module-6">Module 6</Link></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph>
          As we progress through these levels, we move from <strong>discrete, static approaches</strong> to 
          more <strong>continuous, dynamic, and emergent systems</strong>.
        </Paragraph>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>Module Progression</Title>

        <Title level={3} style={{ marginTop: '2em' }}>🧱 Foundation Modules (Atoms → Organs)</Title>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-1">Module 1: Prompt Fundamentals</Link>
          </Title>
          <Paragraph><strong>The Atoms of Context</strong></Paragraph>
          <Paragraph>
            Learn the foundational building blocks of context engineering: basic prompting techniques, 
            atomic instructions, direct prompt engineering strategies, and understanding context windows.
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Master single-turn prompt optimization</Paragraph>
        </div>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-2">Module 2: Context Expansion</Link>
          </Title>
          <Paragraph><strong>Molecules & Cells: Examples and Memory</strong></Paragraph>
          <Paragraph>
            Expand your context capabilities with structured examples and state. Learn few-shot learning, 
            demonstrations, conversation state, and memory mechanisms.
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Stateful conversational systems with example-based learning</Paragraph>
        </div>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-3">Module 3: Multi-Agent Systems</Link>
          </Title>
          <Paragraph><strong>Organs: Coordinated Workflows</strong></Paragraph>
          <Paragraph>
            Orchestrate complex multi-step applications with multi-cell organ architectures, control flow 
            patterns, and advanced patterns like ReAct, Tool-Using Agents, and Debate Organs.
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Complete multi-agent applications with specialized roles</Paragraph>
        </div>

        <Title level={3} style={{ marginTop: '2em' }}>🧠 Advanced Modules (Neural Systems → Unified Fields)</Title>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-4">Module 4: Cognitive Tools</Link>
          </Title>
          <Paragraph><strong>Neural Systems: Mental Models and Reasoning</strong></Paragraph>
          <Paragraph>
            Apply structured cognitive frameworks including mental models, reasoning patterns 
            (Chain-of-Thought, Tree-of-Thoughts), and thinking protocols (CRAFT, Six Thinking Hats).
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Systems that reason using structured cognitive frameworks</Paragraph>
        </div>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-5">Module 5: Field Theory</Link>
          </Title>
          <Paragraph><strong>Neural Fields: Continuous Semantic Spaces</strong></Paragraph>
          <Paragraph>
            Understand context as a continuous field with attractors, resonance, persistence, 
            field boundaries, and multi-field orchestration.
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Field-based context manipulation systems</Paragraph>
        </div>

        <div style={{ marginLeft: '2em', marginBottom: '2em' }}>
          <Title level={4}>
            <Link href="/module-6">Module 6: Meta-Recursion & Unified Framework</Link>
          </Title>
          <Paragraph><strong>The Complete Picture: Integration and Emergence</strong></Paragraph>
          <Paragraph>
            Master the unified theoretical framework including quantum semantics, symbolic mechanisms, 
            meta-recursive systems, and unified field theory.
          </Paragraph>
          <Paragraph><strong>What You'll Build:</strong> Complete unified context engineering systems</Paragraph>
        </div>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>What You'll Master</Title>
        <ul style={{ fontSize: '1.1em', lineHeight: '2em' }}>
          <li>✅ <strong>Understand</strong> the complete hierarchy from basic prompts to unified field theory</li>
          <li>✅ <strong>Apply</strong> cognitive frameworks and reasoning patterns to complex problems</li>
          <li>✅ <strong>Design</strong> multi-agent systems with orchestrated workflows</li>
          <li>✅ <strong>Manipulate</strong> semantic fields using attractors, resonance, and boundaries</li>
          <li>✅ <strong>Integrate</strong> quantum, field, and symbolic perspectives into unified systems</li>
          <li>✅ <strong>Build</strong> production-ready context engineering applications</li>
        </ul>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>Interactive Features</Title>
        <Paragraph>Each module includes:</Paragraph>
        <ul style={{ fontSize: '1.1em', lineHeight: '2em' }}>
          <li>📝 <strong>Complete Content:</strong> Full, unabridged material from the source repository</li>
          <li>❓ <strong>Interactive Quizzes:</strong> Test your knowledge with embedded assessments</li>
          <li>📊 <strong>Progress Tracking:</strong> Monitor your completion status across all modules</li>
          <li>💻 <strong>Code Examples:</strong> Practical Python implementations you can run</li>
          <li>🎯 <strong>Practical Applications:</strong> Real-world use cases and patterns</li>
        </ul>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>Getting Started</Title>
        <Paragraph style={{ fontSize: '1.1em', marginBottom: '2em' }}>
          Ready to begin your context engineering journey?
        </Paragraph>

        <Space size="large">
          <Link href="/module-1">
            <Button type="primary" size="large">
              Start with Module 1: Atoms →
            </Button>
          </Link>
          
          <Link href="/module-5">
            <Button size="large" style={{ background: '#52c41a', borderColor: '#52c41a', color: 'white' }}>
              Jump to Field Theory (Module 5) →
            </Button>
          </Link>
        </Space>
      </div>

      <div style={{ 
        marginTop: '3em', 
        padding: '2em', 
        background: '#f6f8fa', 
        borderRadius: '8px',
        borderLeft: '4px solid #1890ff'
      }}>
        <Title level={3}>💡 Learning Tip</Title>
        <Paragraph>
          Context engineering is both an art and a science. Don't rush through the modules—take time to:
        </Paragraph>
        <ul>
          <li>Complete the quizzes to test your understanding</li>
          <li>Experiment with the code examples</li>
          <li>Reflect on how concepts connect across modules</li>
          <li>Apply what you learn to your own projects</li>
        </ul>
        <Paragraph>
          The field theory perspective in Modules 5-6 might seem abstract at first, but it provides 
          powerful tools for understanding and manipulating context at scale.
        </Paragraph>
      </div>

      <div style={{ marginTop: '3em' }}>
        <Title level={2}>About This Content</Title>
        <Paragraph>
          This learning platform is based on the <strong>Context Engineering</strong> repository by David Kimai, 
          licensed under the MIT License.
        </Paragraph>
        <Paragraph>
          All content maintains the original depth, technical detail, and comprehensive coverage of the 
          source material. We've enhanced it with interactive quiz components, progress tracking, 
          structured navigation, and visual diagrams.
        </Paragraph>
        <Paragraph>
          <strong>Source Repository:</strong>{' '}
          <a href="https://github.com/davidkimai/Context-Engineering" target="_blank" rel="noopener noreferrer">
            davidkimai/Context-Engineering
          </a>
        </Paragraph>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3em', marginBottom: '3em' }}>
        <blockquote style={{ fontStyle: 'italic', color: '#666' }}>
          "The most incomprehensible thing about the world is that it is comprehensible."
          <br />
          <Text type="secondary">— Albert Einstein</Text>
        </blockquote>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3em', marginBottom: '3em' }}>
        <Link href="/module-1">
          <Button type="primary" size="large" style={{ fontSize: '1.1em', height: 'auto', padding: '16px 32px' }}>
            Begin Your Journey with Module 1 →
          </Button>
        </Link>
      </div>
    </div>
  );
}
