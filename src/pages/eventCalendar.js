function EventCalendar() {
    return (
      <div>
        <table className="eventCalendar">
          <tr>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
            <th>S</th>
          </tr>
          <tr>
            <td className="prevDay">22</td>
            <td className="prevDay">23</td>
            <td className="prevDay">24</td>
            <td className="prevDay">25</td>
            <td className="activeDay">26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
        </table>
      </div>
    );
  }
  
  export default EventCalendar;